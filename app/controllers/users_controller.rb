class UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json, :html, :js

  def index
    respond_to do |format|
      format.html
      format.json { render :json => {users: User.all}}
    end
  end

  def show
    @user = User.includes(:addresses).find(params[:id])
    @addresses = @user.addresses
    respond_to do |format|
      format.html
      format.json { render :json => {user: @user, addresses: @addresses}}
    end  	
  end

  def update
    @user = User.find(params[:id])
    @user.attributes = user_params
    if @user.save
        render json: { user: @user }, methods: :comment_ids, status: :created, localtion: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
  end

  def create
    @user = User.new(user_params)
    # @user.password = Devise.friendly_token.first(8)
    if @user.save
      # AdminMailer.registration_notice(@user, generated_password).deliver
      render json: { user: @user }, methods: :comment_ids, status: :created, localtion: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def edit
    
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    respond_to do |format|
      format.html
      format.json { render :json => {success: true}}
    end

  end
  private
  def user_params
      params.require(:user).permit(:_destroy, :email, :encrypted_password, :password, :title, :firstname, :lastname, :dob, :alternate_email, :mobile, :phone_no, :photo_file_name, :photo_content_type, :photo_file_size, :photo_updated_at, :remove_photo, :member_no, :member_type, :date_joined, :remarks, :user_type, :role, addresses_attributes: [:_destroy, :id, :unit_no, :street_no, :street_name, :suburb, :city, :postcode, :country ])
  end  
end


    