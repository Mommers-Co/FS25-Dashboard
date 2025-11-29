FileSync = {}

function FileSync:save(data)
    local path = getUserProfileAppPath() .. "/farm_sync_data.json"
    local json = json.encode(data)
    saveFile(path, json)
end
