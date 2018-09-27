class FollowToggle{
  constructor(el) {
    this.el = $(el);
    console.log(el); 
    this.userId = this.el.data('user-is') || options.userId;
    this.followState = this.el.data('initial-follow-state') || options.followState;
    render();
  }
  
  render(){
    if (this.followState === 'unfollowed'){
      return "Follow!";
    } else {
      return "Unfollow!";
    }
    $('disabled').toggle();
  }
  
  handleclick(){
    e.preventDefault();
    $.ajax ({
      (this.followState === 'unfollowed') ? (method: "POST") : (method: "DELETE");
      render();
      data: {
        this.followState,
      }
      dataType: "JSON",
    })
  }
}

module.exports = FollowToggle;