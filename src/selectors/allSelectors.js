import { selector } from "recoil";
import { courseState } from "../atoms/courseState";

export const courseLoading = selector({
    key:"courseLoadingSet",
    get:({get})=>{
        const state = get(courseState);

        return state.isLoading;
    }
})

export const courseTitle = selector({
    key:"courseTitleSet",
    get:({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course.title;
        }
        return "";
    }
})

export const courseDescription = selector({
    key:"courseDescriptionSet",
    get:({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course.description;
        }
        return "";
    }
})

export const courseImage = selector({
    key:"courseImageSet",
    get:({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course.imageLink;
        }
        return "";
    }
})

export const coursePrice = selector({
    key:"coursePriceSet",
    get:({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course.price;
        }
        return "";
    }
})

