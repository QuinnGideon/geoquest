require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get questions" do
    get :questions
    assert_response :success
  end

end
