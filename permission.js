const permission = [
    {
        role: "student",
        permission: ["canEditProfile", "canUpdateProfile", "canDeleteProfile"]
    },
    {
        role: "teacher",
        permission: ["canEditResult", "canUpdateResult", "canDeleteResult"]
    },
    {
        role: "management",
        permission: ["all"]
    },
]

module.exports = permission