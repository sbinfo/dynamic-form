import {defineStore} from "pinia"
import {uid} from "uid"
import {vowelCount} from "../../helpers"


export const useFormStore = defineStore("form", {
    state: (): IState => {
        return {
            searchText: "",
            fields: [
                {id: uid(), value: "", vowels: 0, isMatch: false},
                {id: uid(), value: "", vowels: 0, isMatch: false},
                {id: uid(), value: "", vowels: 0, isMatch: false}
            ]
        }
    },
    actions: {
        addField() {
            this.fields.push({
                id: uid(),
                value: "",
                vowels: 0,
                isMatch: false
            })
        },
        deleteField(id: string) {
            const index = this.fields.findIndex(elem => elem.id === id)
            this.fields.splice(index, 1)
        },
        updateFieldValue(newValue: string, fieldId: string) {
            const index = this.fields.findIndex(elem => elem.id === fieldId)
            this.fields[index].value = newValue
            this.fields[index].vowels = vowelCount(newValue)
        },
        setSearchText(newSearchText: string) {
            this.searchText = newSearchText
        }
    },
    getters: {
        isMatch: (state) => {
            console.log('working')
            let match = false
            for (let field of state.fields) {
                const search = state.searchText.toLowerCase()
                const fieldValue = field.value.toLowerCase()

                if (search !== "" && fieldValue === search) {
                    match = true
                } else if (search !== "") {
                    field.isMatch = fieldValue.includes(search)
                } else {
                    field.isMatch = false
                }
            }
            return match
        }
    }
})

interface IState {
    searchText: string
    fields: IFormField[]
}

export interface IFormField {
    id: string
    value: string
    vowels: number
    isMatch: boolean
}
