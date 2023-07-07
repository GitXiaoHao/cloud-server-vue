import httpInstance from "@/rabbit/utils/http.js";

export function getCategoryApi(){
    return httpInstance({
        url: '/rabbit/home/category',
        method: 'get'
    })
}
export function addCategoryApi(rabbitCategory){
    return httpInstance({
        data: rabbitCategory,
        url: '/rabbit/home/category',
        method: "post",
    })
}