import"./index.e9726e59.js";import{w as e,r as t}from"./index.3e735c90.js";const a=e(window.localStorage.getItem("madoc.theme")||"default"),o=t({default:{name:"Default",type:"light"},dark:{name:"Dark",type:"dark"},fresh:{name:"Fresh",type:"light"}});a.subscribe(e=>{window.localStorage.setItem("madoc.theme",e)});export{a as theme,o as themes};