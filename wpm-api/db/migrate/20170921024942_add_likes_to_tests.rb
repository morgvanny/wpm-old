class AddLikesToTests < ActiveRecord::Migration[5.1]
  def change
    add_column :tests, :likes, :integer, :default => 0
  end
end
