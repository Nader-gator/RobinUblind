#change this to email and ID only later
user = @user
json.extract! user, :id, :email, :password_digest, :session_token, :bankroll