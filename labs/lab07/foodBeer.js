db.towns.find({ $and : [ { name : /e/ } , { famousFor : 'food' || 'beer' } ] })

