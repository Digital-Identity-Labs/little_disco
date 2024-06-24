<script setup>

const props = defineProps(['service', 'config'])

const service = props.service

</script>

<template>

  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-auto">
        <a href="#">
          <span class="avatar" style="background-image: url(./static/avatars/000m.jpg)"></span>
        </a>
      </div>
      <div class="col text-truncate">
        <a href="#" class="text-reset d-block">Paweł Kuna</a>
        <div class="d-block text-secondary text-truncate mt-n1">Change deprecated html tags to text decoration classes
          (#29604)
        </div>
      </div>
      <div class="col-auto">
        <a href="#" class="list-group-item-actions"><!-- Download SVG icon from http://tabler-icons.io/i/star -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
  </div>


</template>
