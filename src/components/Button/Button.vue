<template>
  <button class="button"
    :class="{
      primary,
      light,
      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large',
    }"
    @click="onClick"
    >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      primary: {
        type: Boolean,
        required: false,
      },
      light: {
        type: Boolean,
        required: false,
      },
      size: {
        type: String,
        required: true,
        validator: value => {
          return ['small', 'medium', 'large'].indexOf(value) !== -1
        }
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    --color-primary: #1b1c1d;
    --color-primary-lighter: rgb(49, 51, 52);
    --color-light: #eeeeee;
    --color-light-lighter: #f7f7f7;
    --color-white: #ffffff;

    border: 1px solid var(--color-light);
    border-radius: 0.3rem;
    background-color: var(--color-white);
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease-in-out;

    &:hover {
      background: var(--color-light);
    }

  }

  .primary {
    background: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);

    &:hover {
      background: var(--color-primary-lighter);
    }

  }

  .light {
    background: var(--color-light);
    color: var(--color-primary);
    border: 1px solid var(--color-light);

    &:hover {
      background: var(--color-light-lighter);
    }

  }

  .small {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }

  .medium {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .large {
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
  }

</style>
