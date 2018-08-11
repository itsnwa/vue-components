<template>
  <div
    class="avatar"
    :class="{
      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large',
      rounded,
      circle
    }"
    :style="{ backgroundImage: `url(${image})`}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        required: true,
        validator: value => {
          return ['small', 'medium', 'large'].indexOf(value) !== -1
        }
      },
      image: {
        type: String,
        required: false,
      },
      rounded: {
        type: Boolean,
        required: false,
      },
      circle: {
        type: Boolean,
        required: false,
      },
    }
  }
</script>

<style lang="scss" scoped>

  .avatar {
    --color-primary: #1b1c1d;
    --color-light: #eeeeee;
    --color-white: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;

    background-color: var(--color-light);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .small {
    width: 2rem;
    height: 2rem;
  }

  .medium {
    width: 4rem;
    height: 4rem;
  }

  .large {
    width: 6rem;
    height: 6rem;
  }

  .rounded {
    border-radius: 0.3rem;
  }

  .circle {
    border-radius: 50%;
  }

</style>
