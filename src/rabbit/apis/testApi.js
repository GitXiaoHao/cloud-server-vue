//
//测试
//
import httpInstance from "@/rabbit/utils/http.js";

export function getHitokoto(){
    return httpInstance({
        url: 'hitokoto/i'
    })
}