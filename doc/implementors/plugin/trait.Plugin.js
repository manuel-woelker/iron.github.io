(function() {var implementors = {};
implementors['urlencoded'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedQuery.html' title='urlencoded::UrlEncodedQuery'>UrlEncodedQuery</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedBody.html' title='urlencoded::UrlEncodedBody'>UrlEncodedBody</a>",];implementors['bodyparser'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='bodyparser/struct.Raw.html' title='bodyparser::Raw'>Raw</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='bodyparser/struct.Json.html' title='bodyparser::Json'>Json</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, T: 'static + <a class='trait' href='http://doc.rust-lang.org/rustc-serialize/rustc-serialize/serialize/trait.Decodable.html' title='rustc-serialize::serialize::Decodable'>Decodable</a>&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='bodyparser/struct.Struct.html' title='bodyparser::Struct'>Struct</a>&lt;T&gt;",];implementors['persistent'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='persistent/struct.State.html' title='persistent::State'>State</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='persistent/struct.Read.html' title='persistent::Read'>Read</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='persistent/struct.Write.html' title='persistent::Write'>Write</a>&lt;P&gt;",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='/struct.Raw.html' title='::Raw'>Raw</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='/struct.Json.html' title='::Json'>Json</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, T: 'static + <a class='trait' href='http://doc.rust-lang.org/rustc-serialize/rustc-serialize/serialize/trait.Decodable.html' title='rustc-serialize::serialize::Decodable'>Decodable</a>&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='/struct.Struct.html' title='::Struct'>Struct</a>&lt;T&gt;",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.State.html' title='::State'>State</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Read.html' title='::Read'>Read</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Write.html' title='::Write'>Write</a>&lt;P&gt;",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.State.html' title='::State'>State</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Read.html' title='::Read'>Read</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Write.html' title='::Write'>Write</a>&lt;P&gt;",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Raw.html' title='::Raw'>Raw</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Json.html' title='::Json'>Json</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, T: 'static + <a class='trait' href='http://doc.rust-lang.org/rustc-serialize/rustc-serialize/serialize/trait.Decodable.html' title='rustc-serialize::serialize::Decodable'>Decodable</a>&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Struct.html' title='::Struct'>Struct</a>&lt;T&gt;",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.UrlEncodedQuery.html' title='::UrlEncodedQuery'>UrlEncodedQuery</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.UrlEncodedBody.html' title='::UrlEncodedBody'>UrlEncodedBody</a>",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.UrlEncodedQuery.html' title='::UrlEncodedQuery'>UrlEncodedQuery</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.UrlEncodedBody.html' title='::UrlEncodedBody'>UrlEncodedBody</a>",];implementors[''] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.State.html' title='::State'>State</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Read.html' title='::Read'>Read</a>&lt;P&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, 'b, P: Key&gt; Plugin&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='/struct.Write.html' title='::Write'>Write</a>&lt;P&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
