<template>
    
    
    <div   :class="book.Availability ? 'blue': 'cream' ">
                        <h2>{{book.Title}}</h2>
                        <h4>Event Type : {{book.Event_Type}}    </h4>
                        <h4>Description : {{book.Description}}</h4>
                        <h4>Featured Artists : {{book.Featured_Artists}}</h4>
                        <h4>Date and Time : {{book.Date_and_Time}}</h4>
                        <h4>Location : {{book.Location}}</h4>
                        <h4>Ticket Price : {{book.Ticket_Price}}</h4>
                        <h4>Availability : {{book.Availability}}</h4>
                        <img :src="book.Photo" alt="image alt" >
    
                        
    </div>
</template>

<script>

export default{
    name: 'SingleBook',
    props:{
        book: Array
    }
}
</script>

<style scoped>

.blue{
    background-color:  #D5E4F4;
}


div{
    
    
    color: black;
    padding: 2em;
    text-align: center;
    width: 75%;
    margin:auto;
    
    
    

}

h2{
    
    font-size:22px;
    color:brown;
    background-color:#DCDCDC;
    font-weight:bold;
    margin-bottom:10px; 
    display:inline-block;

}

h4{
    font-size:16px;
    margin-top:2.5px;
}


img{
    margin-top:20px;  
    height:180px;
    width:320px;
    text-align:center
}

.cream{
background-color:  #FBFAF5!important;

}

@media screen and (max-width: 550px) {
  img{
    margin-top:20px;
    margin-right:20px;
    height:100px;
    width:180px;
}

div{
  
    width: 65%;
    margin:auto;   
    
}
}



@media screen and (min-width: 800px) and (max-width: 1000px) {
  img {
    margin-top: 20px;
    margin-right: 20px;
    height: 110px;
    width: 180px;
  }
  div{
  
    width: 85%;
    margin:auto;   
    
}
}


@media screen and (min-width: 1000px) and (max-width: 1300px) {
  img {
    margin-top: 20px;
    margin-right: 20px;
    height: 150px;
    width: 250px;
  }
}



</style>