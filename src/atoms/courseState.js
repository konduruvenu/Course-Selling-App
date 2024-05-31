import { atom } from "recoil";

export const courseState = atom({
    key:"courseStateSet",
    default:{
        isLoading : true,
        course: null
    },
});