function ok(res, data, message = "Success") {
    return res.status(200).json({
      success: true,
      message,
      data
    });
  }
  
  function created(res, data, message = "Created") {
    return res.status(201).json({
      success: true,
      message,
      data
    });
  }
  
  function fail(res, status = 500, message = "Internal server error") {
    return res.status(status).json({
      success: false,
      message,
      data: null
    });
  }
  
  module.exports = {
    ok,
    created,
    fail
  };