import {reactive,computed,watch,onMounted,nextTick} from 'vue'
const counterData=reactive({
   count:0,
   title:"My Counter"
})
export function useCounter(){
    
     
     watch(()=>counterData.count,(newCount,oldCount)=>{
        if(newCount===20){
           alert('Way to go! You made it to 20!')
        }
     })
     
     const OddorEven=computed(()=>{
        if(counterData.count%2===0) return 'Even'
        return 'Odd'
     })
     
     const increaseCounter=(amount,event)=>{
         
           counterData.count+=amount
           nextTick(()=>{
              console.log('do something when counter has updated in the DOM')
           })
        }
     const decreaseCounter=(amount)=>{
        counterData.count-=amount
        }
     
        onMounted(()=>{
        console.log("Do stuff related to counter")
     })

     return {
        counterData,
        OddorEven,
        increaseCounter,
        decreaseCounter
     }
}