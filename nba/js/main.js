// enables tooltips in a way that allows them to update as data changes
Vue.directive('tooltip', {
  bind: addTooltip,
  inserted: addTooltip,
  update: addTooltip,
  componentUpdated: addTooltip,
  unbind (el, binding) {
    $(el).tooltip('dispose');
  }
})

function addTooltip(el, binding) {
  $(el).tooltip('dispose')
  if (binding.value != undefined) {
    $(el).tooltip({
      title: binding.value,
      placement: binding.arg,
    })
  }
}

new Vue({
  el: '#app',
  components: {
    'n-page': NPage
  },
  data: {
    todayGames: todayGames,
    rounds: rounds
  },
  created: function () {
    // sort the rounds
    this.rounds.sort((a, b) => a.number < b.number ? 1 : -1)
  }
})
