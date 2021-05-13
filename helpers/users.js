const db = require('../models');

//create new user 
exports.createUser = async (req, res) => {
	try {
        let newUser = await db.User.create(req.body);
        await res.status(200).json({message: "New user created!", newUser});
	} catch (error) {
		res.status(500).json({message: error});
	}
};

//get users 
exports.getUsers = async (req, res) => {
	try {
		let users = await db.User.find();
		res.status(200).json({users});
	} catch (error) {
		res.status(500).json({message: error});
	}
};

//get user
exports.getUser = async (req, res) => {
	try {
		let foundUser = await db.User.findById(req.params.userId);
		await res.status(200).json({foundUser});
	} catch (error) {
		res.status(500).json({message: error});
	}
};

//update user
exports.updateUser = async (req, res) => {
	try {
		let user = await db.User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
			new: true
		});
		await res.status(200).json(user);
	} catch (error) {
		res.status(500).json({message: error});
	}
};

//delete user
exports.deleteUser = async (req, res) => {
	try {
		await db.User.remove({ _id: req.params.userId });
		await res.status(200).json({ message: 'Data deleted!' });
	} catch (error) {
		res.status(500).json({message: error});
	}
};

module.exports = exports;

