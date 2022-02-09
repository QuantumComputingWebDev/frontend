import {atom} from 'recoil';

export const errorAtom = atom({
    key: "errors",
    default: null
})

export const isRegisterDialogOpen = atom({
    key: "isRegisterDialogOpen",
    default: false
})
