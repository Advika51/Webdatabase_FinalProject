<template>
   
    <div class="book-grid">
    <div v-for="book of books" :key="book.id" >

     
       <SingleBook :book=book />

    </div>
    </div>

</template>
<script>
import SingleBook from './SingleBook.vue'

export default {
    name: 'BookBox',
    props:{
        books: Array
    },
    components:{
        SingleBook
    }
    
}
</script>
<style>

  .book-grid {
    margin-top:50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px; /* Space between items */
}
    
@media screen and (max-width: 800px) {
   .book-grid {
    margin-top:50px;
    display: grid;
    grid-template-columns: 1fr ;
    gap: 20px; /* Space between items */
}
}
</style>
