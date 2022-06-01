<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor) of getFloorList"
           :key="floor.id"
           :listFloor="floor" />
    <Brand />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListContainer from './ListContainer';
import Recommend from './Recommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
export default {
    name: 'Hemo',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted() {
        this.$store.dispatch('getFloorList');
    },
    computed: {
        ...mapState({
            getFloorList: state => {
                return state.home.floorList;
            },
        }),
    },
};
</script>

<style></style>
