$(document).ready(function(){
	loadCategories()
	loadTags()
});

// Get categories JSON
function loadCategories() {
	$.getJSON("/kategoriArtikel", function(data){
		let categoryTable = ejs.render(
			"<% for(let i = 0; i < categories.length; i++) { %>" +
				"<tr>" +
					"<td class='text-center'><%= i + 1 %></td>" +
					"<td class='namaKategori'><%= categories[i].name %></td>" +
					"<td><%= categories[i].created %></td>" +
					"<td class='text-right'><%= categories[i].updated %></td>" +
					"<td class='td-actions text-right'>" +
						"<button value='<%= categories[i]._id %>' class='btn btn-warning btn-round editCategory'>" +
							"<i class='material-icons'>edit</i>" +
						"</button>" +
						"<button value='<%= categories[i]._id %>' class='btn btn-danger btn-round deleteCategory'>" +
							"<i class='material-icons'>delete</i>" +
						"</button>" +
					"</td>" +
				"</tr>" +
			"<% } %>"
		, {categories: data});
		
		$("#categoryTable").html(categoryTable);
		
		// Add category button click event
		$("#addCategory").click(function(){
			swal({
				title: 'Tambah Kategori',
				html: '<div class="form-group">' +
					'<input name="categoryName" id="input-field" type="text" class="form-control">' +
					'</div>',
				showCancelButton: true,
				confirmButtonText: 'Tambah Kategori',
				confirmButtonClass: 'btn btn-success',
				cancelButtonText: 'Batalkan',
				cancelButtonClass: 'btn btn-danger',
				buttonsStyling: false
			}).then(function() {
				$.ajax({
					type: "POST",
					url: '/kategoriArtikel',
					timeout: 2000,
					dataType : 'json',
					data: {categoryName: $("#input-field").val()},
					success: function(response) {
						swal({
							title: "Sukses",
							text: "Kategori " + JSON.stringify(response.name) + " telah ditambah!",
							buttonsStyling: false,
							confirmButtonClass: "btn btn-success",
							type: "success"
						});
					},
					failure: function (response) {
						swal({
							title: "Error",
							text: JSON.stringify(response),
							buttonsStyling: false,
							confirmButtonClass: "btn btn-success",
							type: "error"
						});
					}
				}).done(loadCategories());
			}).catch(swal.noop);
		});
		
		// Edit category buttons click events & JSON
		$(".editCategory").each(function(index){
			$(this).click(function(){
				let namaKategori = $(this).parent().parent().find(".namaKategori").text();
				let tombol = $(this);
				swal({
					title: 'Edit Kategori',
					html: '<div class="form-group">' +
						'<input name="categoryName" id="input-field" type="text" class="form-control" value="' + namaKategori + '">' +
						'</div>',
					confirmButtonClass: 'btn btn-success',
					confirmButtonText: 'Edit Kategori',
					showCancelButton: true,
					cancelButtonClass: 'btn btn-danger',
					cancelButtonText: 'Batalkan',
					buttonsStyling: false
				}).then(function(){
					$.ajax({
						type: "PUT",
						url: '/kategoriArtikel/' + tombol.val(),
						timeout: 2000,
						dataType : 'json',
						data: {categoryName: $("#input-field").val()},
						success: function(response) {
							swal({
								title: 'Edit Berhasil',
								text: 'Kategori ' + namaKategori + ' telah diubah menjadi ' + JSON.stringify(response.name),
								type: 'success',
								confirmButtonClass: "btn btn-success",
								buttonsStyling: false
							});
						},
						failure: function(response) {
							swal({
								title: "Error",
								text: JSON.stringify(response),
								buttonsStyling: false,
								confirmButtonClass: "btn btn-success",
								type: "error"
							});
						}
					}).done(loadCategories());
				}).catch(swal.noop);
			});
		});
		
		// Delete category buttons click events & JSON
		$(".deleteCategory").each(function(index){
			$(this).click(function(){
				let namaKategori = $(this).parent().parent().find(".namaKategori").text();
				let tombol = $(this);
				swal({
					title: 'Hapus Kategori',
					text: "Anda akan menghapus kategori " + namaKategori + " secara permanen",
					type: 'warning',
					confirmButtonClass: 'btn btn-success',
					confirmButtonText: 'Setuju',
					showCancelButton: true,
					cancelButtonClass: 'btn btn-danger',
					cancelButtonText: 'Batalkan',
					buttonsStyling: false
				}).then(function(){
					$.ajax({
						type: "DELETE",
						url: '/kategoriArtikel/' + tombol.val(),
						timeout: 2000,
						dataType : 'json',
						success: function(response) {
							swal({
								title: 'Terhapus!',
								text: 'Kategori ' + namaKategori + ' telah dihapuskan.',
								type: 'success',
								confirmButtonClass: "btn btn-success",
								buttonsStyling: false
							});
						},
						failure: function(response) {
							swal({
								title: "Error",
								text: JSON.stringify(response),
								buttonsStyling: false,
								confirmButtonClass: "btn btn-success",
								type: "error"
							});
						}
					}).done(loadCategories());
				}).catch(swal.noop);
			});
		});
	});
}

// Get tags JSON
function loadTags() {
	$.getJSON("/tagArtikel", function(data){
		let tagTable = ejs.render(
			"<% for(let i = 0; i < tags.length; i++) { %>" +
				"<tr>" +
					"<td class='text-center'><%= i + 1 %></td>" +
					"<td class='namaTag'><%= tags[i].name %></td>" +
					"<td><%= tags[i].created %></td>" +
					"<td class='text-right'><%= tags[i].updated %></td>" +
					"<td class='td-actions text-right'>" +
						"<button value='<%= tags[i]._id %>' class='btn btn-warning btn-round editTag'>" +
							"<i class='material-icons'>edit</i>" +
						"</button>" +
						"<button value='<%= tags[i]._id %>' class='btn btn-danger btn-round deleteTag'>" +
							"<i class='material-icons'>delete</i>" +
						"</button>" +
					"</td>" +
				"</tr>" +
			"<% } %>"
		, {tags: data});
		
		$("#tagTable").html(tagTable);
		
		// Add tag button click event
		$("#addTag").click(function(){
			swal({
				title: 'Tambah Tag',
				html: '<div class="form-group">' +
					'<input name="tagName" id="input-field" type="text" class="form-control">' +
					'</div>',
				showCancelButton: true,
				confirmButtonText: 'Tambah Tag',
				confirmButtonClass: 'btn btn-success',
				cancelButtonText: 'Batalkan',
				cancelButtonClass: 'btn btn-danger',
				buttonsStyling: false
			}).then(function() {
				$.ajax({
					type: "POST",
					url: '/tagArtikel',
					timeout: 2000,
					dataType : 'json',
					data: {tagName: $("#input-field").val()},
					success: function(response) {
						swal({
							title: "Sukses",
							text: "Tag " + JSON.stringify(response.name) + " telah ditambah!",
							buttonsStyling: false,
							confirmButtonClass: "btn btn-success",
							type: "success"
						})
					},
					failure: function (response) {
						swal({
							title: "Error",
							text: JSON.stringify(response),
							buttonsStyling: false,
							confirmButtonClass: "btn btn-success",
							type: "error"
						});
					}
				}).done(loadTags());
			}).catch(swal.noop);
		});
		
		// Edit tag buttons click events & JSON
		$(".editTag").each(function(index){
			$(this).click(function(){
				let namaTag = $(this).parent().parent().find(".namaTag").text();
				let tombol = $(this);
				swal({
					title: 'Edit Tag',
					html: '<div class="form-group">' +
						'<input name="tagName" id="input-field" type="text" class="form-control" value="' + namaTag + '">' +
						'</div>',
					confirmButtonClass: 'btn btn-success',
					confirmButtonText: 'Edit Tag',
					showCancelButton: true,
					cancelButtonClass: 'btn btn-danger',
					cancelButtonText: 'Batalkan',
					buttonsStyling: false
				}).then(function(){
					$.ajax({
						type: "PUT",
						url: '/tagArtikel/' + tombol.val(),
						timeout: 2000,
						dataType : 'json',
						data: {tagName: $("#input-field").val()},
						success: function(response) {
							swal({
								title: 'Edit Berhasil',
								text: 'Tag ' + namaTag + ' telah diubah menjadi ' + JSON.stringify(response.name),
								type: 'success',
								confirmButtonClass: "btn btn-success",
								buttonsStyling: false
							});
						},
						failure: function(response) {
							swal({
								title: "Error",
								text: JSON.stringify(response),
								buttonsStyling: false,
								confirmButtonClass: "btn btn-success",
								type: "error"
							});
						}
					}).done(loadTags());
				}).catch(swal.noop);
			});
		});
		
		// Delete tag buttons click events & JSON
		$(".deleteTag").each(function(index){
			$(this).click(function(){
				let namaTag = $(this).parent().parent().find(".namaTag").text();
				let tombol = $(this);
				swal({
					title: 'Hapus Tag',
					text: "Anda akan menghapus tag " + namaTag + " secara permanen",
					type: 'warning',
					confirmButtonClass: 'btn btn-success',
					confirmButtonText: 'Setuju',
					showCancelButton: true,
					cancelButtonClass: 'btn btn-danger',
					cancelButtonText: 'Batalkan',
					buttonsStyling: false
				}).then(function(){
					$.ajax({
						type: "DELETE",
						url: '/tagArtikel/' + tombol.val(),
						timeout: 2000,
						dataType : 'json',
						success: function(response) {
							swal({
								title: 'Terhapus!',
								text: 'Tag ' + namaTag + ' telah dihapuskan.',
								type: 'success',
								confirmButtonClass: "btn btn-success",
								buttonsStyling: false
							});
						},
						failure: function(response) {
							swal({
								title: "Error",
								text: JSON.stringify(response),
								buttonsStyling: false,
								confirmButtonClass: "btn btn-success",
								type: "error"
							});
						}
					}).done(loadTags());
				}).catch(swal.noop);
			});
		});
	});
}




