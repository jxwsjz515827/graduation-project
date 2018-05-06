package com.sbeam.model;

import java.util.Date;

public class GameBase {

	private String GameId;
	private String GameName;
	private String Developer;
	private String Publisher;
	private Date ReleaseDate;
	public String getGameId() {
		return GameId;
	}
	public void setGameId(String gameId) {
		GameId = gameId;
	}
	public String getGameName() {
		return GameName;
	}
	public void setGameName(String gameName) {
		GameName = gameName;
	}
	public String getDeveloper() {
		return Developer;
	}
	public void setDeveloper(String developer) {
		Developer = developer;
	}
	public String getPublisher() {
		return Publisher;
	}
	public void setPublisher(String publisher) {
		Publisher = publisher;
	}
	public Date getReleaseDate() {
		return ReleaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		ReleaseDate = releaseDate;
	}
	
	
}
