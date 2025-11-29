HttpSync = {}

function HttpSync:send(data)
    local json = json.encode(data)
    local headers = {
        ["Content-Type"] = "application/json",
        ["Authorization"] = "Bearer " .. Config.token
    }

    network.send(Config.serverUrl, "POST", headers, json, function(response)
        print("Sync response: " .. response.status)
    end)
end
