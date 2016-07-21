require 'test_helper'

class AdminMailerTest < ActionMailer::TestCase
  test "registration_notice" do
    mail = AdminMailer.registration_notice
    assert_equal "Registration notice", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
