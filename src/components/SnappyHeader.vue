<template>
    <header><div class="logo-container"><a href="" class="logo"><span class="stand-alone">S</span><span>nappy</span></a></div></header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
header{
    background: #393e46;
    padding: 8px 10px;
    color: #eee;
    display: flex;
    justify-content: space-between;
    -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
}
.logo{
    background-color: #eee;
    background-image: linear-gradient(to right, #FDFBFB, #EBEDEE 70%);
    background: linear-gradient(to right, #eee 0%, #32e0c4 100%);
    /* background-image: linear-gradient(45deg, #32e0c4 16.66%, #574b90 16.66%, #574b90 33.33%, #32e0c4 33.33%, #32e0c4 50%, #574b90 50%, #574b90 66.66%, #32e0c4 66.66%, #32e0c4 100%); */
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: bold;
    font-size: 24px;
    font-family: 'Shrikhand', cursive;
    /* background-size: 100%;
    background-repeat: repeat; */
    text-transform: uppercase;
    letter-spacing: 4px;
    animation: text-animation-r 0.75s ease forwards;
}
.logo .stand-alone{
    font-size: 36px;
}
.logo:hover{
    animation: text-animation 0.5s ease-in forwards;
}

@keyframes text-animation-r {
    0% {
        background-size: 900%;
    }
    40% {
        background-size: 900%;
    }
    100% {
        background-size: 100%;
    }
}

@keyframes text-animation {
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 900%;
    }
    100% {
        background-size: 650%;
    }
}
</style>