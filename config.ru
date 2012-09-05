Rack::Mime::MIME_TYPES.merge!({'manifest' => 'text/cache-manifest'})
use Rack::Static, :urls => [""], :root => 'public', :index => 'index.html'
run Rack::Directory.new("public")