<template>
    <div>
        <div class="article-card">
        <div class="article-card-image-container">
            <img :src="image" alt="title" />
        </div>
        <div class="article-card-info">
            <div class="article-card-category">{{category}}</div>
            <div class="article-card-title">{{title}}</div>
            <div class="article-card-sub">{{sub}}</div>
        </div>
    </div>
    </div>
</template>


<script>
export default{
    name: "ArticleCard",
    props:["image", "category", "title", "sub"]
}
</script>



<style scoped>
@import "./ArticleCard.css"
</style>