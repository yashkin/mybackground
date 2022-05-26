class Valid2 extends Valid {
    constructor(email, password, emailError, passwordError) {
        super(email, password, emailError, passwordError);
        this.emailError = '';
        this.passwordError = '';
    }
        validate() {
        super.validate();
        if (this.isValid == false) {
            this.passwordError = 'min length 6';
            return false;
            }
            
        if (this.email =='') {
            this.isValid=false;
            this.emailError = 'email empty';
            return false;
        }
        return true;
        }
}