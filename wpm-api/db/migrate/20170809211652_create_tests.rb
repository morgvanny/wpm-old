class CreateTests < ActiveRecord::Migration[5.1]
  def change
    create_table :tests do |t|
      t.string :team
      t.integer :wpm
      t.integer :length

      t.timestamps
    end
  end
end
