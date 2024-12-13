<template>

<div>
    <h1> {{bookName}} </h1>
    <h2> {{authorName}} </h2>
    <h4> {{yourName}} </h4>
</div>
</template>

<script>

export default{ // Exporting Default Object
    name: 'MyHeader',
    props:{ 

        authorName:String,
        bookName:String,
        yourName: String
    }
}

</script>

<style scoped>

div{
    background-image: url('img.png');
     background-size: 1300px 140px; /* Fixed width and height */
     background-repeat:no;
    text-align: center;
    background-color: #F7D0B0;
}



h1{
    padding-top:20px;
}

h2{
    margin-top:10px;
}

h4{
    padding-bottom:20px;
}

@media screen and (max-width: 420px) {
  div{
    background-image: url('img.png');
     background-size: 440px 140px; /* Fixed width and height */
     background-repeat:no;
    text-align: center;
    background-color: #F7D0B0;
}
h1{
    font-size:20px;
}

h2{
    font-size:15px;
}

h4{
    font-size:10px;
}
}

@media screen and (min-width: 420px) and (max-width: 500px) {
  div{
    background-image: url('img.png');
     background-size: 500px 140px; /* Fixed width and height */
     background-repeat:no;
    text-align: center;
    background-color: #F7D0B0;
}
h1{
    font-size:30px;
}

h2{
    font-size:22px;
}

h4{
    font-size:18px;
}
}


</style>