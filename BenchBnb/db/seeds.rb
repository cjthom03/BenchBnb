# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all

Bench.create!({ description: "A bench! #1", lat: 37.768527, lng: -122.463225 })
Bench.create!({ description: "A bench! #2", lat: 37.769199, lng: -122.440725 })
Bench.create!({ description: "A bench! #3", lat: 37.759294, lng: -122.408588 })
Bench.create!({ description: "A bench! #4", lat: 37.772190, lng: -122.426791 })
Bench.create!({ description: "A bench! #5", lat: 37.764020, lng: -122.429297 })
