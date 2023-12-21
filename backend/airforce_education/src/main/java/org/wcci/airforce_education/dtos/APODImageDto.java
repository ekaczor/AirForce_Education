package org.wcci.airforce_education.dtos;

public class APODImageDto {
    private String copyright;
    private String date;
    private String explanation;
    private String title;
    private String hdurl;
    private String url;

    public APODImageDto(String copyright, String date, String explanation, String title, String hdurl, String url){
        this.copyright=copyright;
        this.date=date;
        this.explanation= explanation;
        this.hdurl=hdurl;
        this.url=url;
    }

    public String getCopyright(){
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright= copyright;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date=date;
    }
    
    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation=explanation;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title=title;
    }

    public String getHdurl() {
        return hdurl;
    }

    public void setHdurl(String hdurl){
        this.hdurl=hdurl;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url){
        this.url=url;
    }

}
