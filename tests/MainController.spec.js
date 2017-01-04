describe('MainController', () => {
  beforeEach(module('app'))

  let $controller

  beforeEach(inject(_$controller_ => {
    $controller = _$controller_
  }))

  it('should have Steve Jobs\'s name', () => {
    const controller = $controller('MainController', { $scope: {} })

    expect(controller.name).toEqual('Steve Jobs')
  })
})
