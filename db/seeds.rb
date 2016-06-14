# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)

Country.delete_all

Dir.foreach('./app/assets/images/flags') do |item|
	string = item.gsub('.png', '')
  Country.create(
  	slug: string
  )
end

# Country.create([
# 	{
# 		name: "Andora",
# 		slug: "ad.png"
# 		},
# 	{
# 		name: "United Arab Emirates",
# 		slug: "ae.png"
# 		},
# 	{
# 		name: "Afghanistan",
# 		slug: ""
# 		},
# 		{
# 		name: "Antigua and Barbuda",
# 		slug: ""
# 		},
# 	{
# 		name: "Anguilla",
# 		slug: ""
# 		},
# 	{
# 		name: "Albania",
# 		slug: ""
# 		},
# 		{
# 		name: "Armenia",
# 		slug: ""
# 		},
# 	{
# 		name: "Angola",
# 		slug: ""
# 		},
# 	{
# 		name: "Antarctica",
# 		slug: ""
# 		},
# 		{
# 		name: "Argentina",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 		{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
# 	{
# 		name: "",
# 		slug: ""
# 		},
		
# 	])