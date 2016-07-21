class AdminMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.admin_mailer.registration_notice.subject
  #
  def registration_notice(user, password)
    @greeting = "Hi"

    mail(to: 'admin@gmail.com', subject: 'A new user has registered')
  end
end
