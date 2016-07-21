class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :unit_no
      t.string :street_no
      t.string :street_name
      t.string :suburb
      t.string :city
      t.string :postcode
      t.string :country
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
