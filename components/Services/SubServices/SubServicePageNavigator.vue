<template>
    <div class="subServiceNavigator">
        <div class="d-inline-block left">
            <img src="@/assets/images/left-arrow.svg" alt="Arrow left">
        </div>
        <div class="d-inline-block right">
            <img src="@/assets/images/left-arrow.svg" alt="Arrow right">
        </div>
        <div class="d-inline-block pageName">
            <div
                class="d-inline-block" 
                v-for="(item, i) in subServicePages" :key="i">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['subServicePages']
    
}
</script>

<style scoped>

.subServiceNavigator {
    position: absolute;
    bottom: 30px;
}

.subServiceNavigator img {
    width: 30px;
}

.subServiceNavigator .right img {
    transform: rotate(180deg);
}

.subServiceNavigator > div {
    margin-right: 1rem;
}

.pageName {
    color: #fff;
}


</style>
