<template>
  <div class="list-item">
    <Avatar v-if="avatar" class="avatar" size="small" :image="avatar" circle />
    <span v-if="text" v-text="text" class="text" />
  </div>
</template>

<script>
  import Avatar from "@/components/Avatar/Avatar"

  export default {
    components: {
      Avatar,
    },
    props: {
      avatar: {
        type: String
      },
      text: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-item {
    --color-primary: #1b1c1d;
    --color-primary-lighter: rgb(49, 51, 52);
    --color-light: #eeeeee;
    --color-light-lighter: #f7f7f7;
    --color-white: #ffffff;

    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-light);
  }
  .avatar {
    margin-right: 1rem;
  }
  .text {
    font-size: 1rem;
  }
</style>
