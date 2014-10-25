(function() {var implementors = {};
implementors['lib'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/master/sync/lock/struct.RWLock.html' title='sync::lock::RWLock'>RWLock</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='lib/struct.State.html' title='lib::State'>State</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;D&gt;&gt; for <a class='struct' href='lib/struct.Read.html' title='lib::Read'>Read</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/master/sync/lock/struct.Mutex.html' title='sync::lock::Mutex'>Mutex</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='lib/struct.Write.html' title='lib::Write'>Write</a>&lt;P, D&gt;",];
implementors['persistent'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/sync/lock/struct.RWLock.html' title='sync::lock::RWLock'>RWLock</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='persistent/struct.State.html' title='persistent::State'>State</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;D&gt;&gt; for <a class='struct' href='persistent/struct.Read.html' title='persistent::Read'>Read</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D&gt; PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/sync/lock/struct.Mutex.html' title='sync::lock::Mutex'>Mutex</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='persistent/struct.Write.html' title='persistent::Write'>Write</a>&lt;P, D&gt;",];
implementors['urlencoded'] = ["<a class='stability Unmarked' title='No stability level'></a>impl PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='type' href='urlencoded/type.QueryMap.html' title='urlencoded::QueryMap'>QueryMap</a>&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedQuery.html' title='urlencoded::UrlEncodedQuery'>UrlEncodedQuery</a>","<a class='stability Unmarked' title='No stability level'></a>impl PluginFor&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>, <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hashmap/map/struct.HashMap.html' title='std::collections::hashmap::map::HashMap'>HashMap</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>, <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt;&gt;&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedBody.html' title='urlencoded::UrlEncodedBody'>UrlEncodedBody</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
