class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :addresses

  accepts_nested_attributes_for :addresses, :allow_destroy => true

  def date_joined
  	self[:date_joined].strftime("%Y-%m-%d") if self[:date_joined]
  end
end
