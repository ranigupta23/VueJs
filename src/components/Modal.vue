<template>
     <teleport to=".modals-container">
            <div class="modal">
            <h1>This is a modal</h1>
            <p>lorem
            </p>
            <button>Hide modal</button>
        </div>

        </teleport>
    
</template>

<style>
.modal{
    background:beige;
    padding:10px;
    postion:absolute;
    left:0;
    right:0;
    width:100%;
    height:100%;

}
</style>