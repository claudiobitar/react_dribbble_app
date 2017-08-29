
   $('.box').click(function () {
     $('body').append('<div id="modal' 
     + val.id + '" class="modal fade" role="dialog"><div 
     class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><button type="button" 
      class="close" data-dismiss="modal">&times;</button>
      <img class="avatar img-circle" src="' + val.user.avatar_url + '"/>
      <h3>' + val.user.name + '</h3>
      </div><div class="modal-body"><p>' + val.description + '</p></div>
      <div class="modal-footer">
      <button type="button" 
      class="btn btn-default" data-dismiss="modal">Close</button>
      </div></div></div></div>');
   });  
  

   {self.state.hover ?     
    <div>
      <img className="cover" src={val.images.normal} />
      <div className="bar">
        <h2>{val.title}</h2>
        <span>{val.views_count}'</span>
        <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
      </div>
    </div> 
  : null} 