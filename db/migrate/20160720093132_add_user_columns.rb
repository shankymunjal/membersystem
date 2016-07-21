class AddUserColumns < ActiveRecord::Migration
  def change
  	add_column :users, :title, :string
  	add_column :users, :firstname, :string
  	add_column :users, :lastname, :string
  	add_column :users, :dob, :string
	add_column :users, :alternate_email, :string
	add_column :users, :mobile, :string
	add_column :users, :phone_no, :string
	add_column :users, :photo_file_name, :string
	add_column :users, :photo_content_type, :string
	add_column :users, :photo_file_size, :integer
	add_column :users, :photo_updated_at, :datetime
	add_column :users, :remove_photo, :boolean
	add_column :users, :member_no, :string
	add_column :users, :member_type, :string
	add_column :users, :date_joined, :datetime
	add_column :users, :remarks, :string
	add_column :users, :user_type, :string
	add_column :users, :role, :string

  end
end
