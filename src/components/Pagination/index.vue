<template>
  <div class="pagination">
    <button v-on:click="$emit('getTotle',pageNo-1)"
            :disabled="pageNo==1">上一页</button>
    <button v-if="startNumEndNum.start>1"
            v-on:click="$emit('getTotle',1)"
            :class="{active:pageNo==1}">1</button>
    <button v-if="startNumEndNum.start>2">···</button>

    <button v-for="(pag,index) of startNumEndNum.end"
            :key="index"
            v-if="pag >= startNumEndNum.start"
            v-on:click="$emit('getTotle',pag)"
            :class="{active:pageNo==pag}">{{pag}}</button>

    <button v-if="startNumEndNum.end < totlePag-1">···</button>
    <button v-if="startNumEndNum.end < totlePag"
            v-on:click="$emit('getTotle',totlePag)">{{totlePag}}</button>
    <button v-on:click="$emit('getTotle',pageNo+1)"
            :disabled="pageNo==totlePag">下一页</button>
    <button>共{{totle}}条</button>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageNo', 'pageSize', 'totle', 'continues'],

    computed: {
        totlePag() {
            return Math.ceil(this.totle / this.pageSize);
        },
        startNumEndNum() {
            const { continues, pageNo, totlePag } = this;

            let start = 0,
                end = 0;
            if (continues > totlePag) {
                start = 1;
                end = totlePag;
            } else {
                start = pageNo - parseInt(continues / 2);
                end = pageNo + parseInt(continues / 2);
                if (start < 1) {
                    start = 1;
                    end = continues;
                }

                if (end > totlePag) {
                    end = totlePag;
                    start = totlePag - continues + 1;
                }
            }

            return { start, end };
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        // 带属性的样式
        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
.active {
    background: skyblue;
}
</style>