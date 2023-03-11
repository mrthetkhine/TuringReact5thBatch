const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
  display()
  {
    console.log('Admin ',this.admin, ' Id ',this.id);
  }
};

user.becomeAdmin();
user.display();