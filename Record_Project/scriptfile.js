$(function(){
		
		var new_dialog = function(type, row){
		var dlg = $("#modal-name").clone();
		var public_url = dlg.find(("#public")),
			internal_url = dlg.find(("#internal")),
			status = dlg.find(("#status"));
			description = dlg.find(("#description"))
			type = type || 'Create';
				if(type==='Edit') {
					get_data();
						//delete(config.button['add new']);
						/*  config.button[type] = function () {
                        row.remove();
                        save_data();

                    };	*/	
						}
			function get_data(){
				var slno= row.find('.slno').text(),
					_public = row.find('.publiccol').text(),
					_internal=row.find('.internalcol').text(),
					_status=row.find('.statuscol').text(),
					_description = row.find('.descriptioncol').text();
						$("#public").val(_public);
						$("#internal").val(_internal);
						$("#status").val(_status);
						$("#description").val(_description);
								
						}	
				};

				$("#modal-trigger, #modal-trigger1, #modal-trigger2").click(function(e){
					new_dialog('Edit', $(this).closest('tr'));
					e.preventDefault();
					dataModal = $(this).attr("data-modal");
					$("#" + dataModal).css({"display":"block"});
					});

					$(".close-modal, .modal-sandbox").click(function(){
					  $(".modal").css({"display":"none"});
					});

			});
		
			