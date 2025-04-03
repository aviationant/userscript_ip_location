// ==UserScript==
// @name         IP Location
// @description  A userscript that shows public IP (IPv4 or IPv6) in a movable dialog box.
// @version      1.1.1
// @author       aviationant
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAYAAACbQR1vAAAAwnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBbDgMhCPznFD2CArp4HLdrk96gxy8INrttJ3F4ZgRgvJ4PuBkwM3DZpLZak4IbN+zqSHL0yTnx5AmOksaXPNCIAmqK1JKHUqN/5fNHwE1Xr5yE5B6F/Vpo8TXKlxC6IZvI/COEWggReiGHQPe1Um2ynVfY1wYL4g+MWK5j/8SbXu8o+g8hDsqUlImqD0D2ClBXhyejNWqb+UVZEWJ6kH93WoA3JulZP7yhg5kAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBiG36aVilQc7CDikKE62UVFRJdSxSJYKG2FVh1MLv2DJg1Jiouj4Fpw8Gex6uDirKuDqyAI/oC4C06KLlLid0mhRYx3HPfw3ve+3H0HCM0qU81ADFA1y0gn4mIuvyoGXxGAn+Ys5iRm6snMYhae4+sePr7fRXmWd92fo18pmAzwicQxphsW8Qbx9Kalc94nDrOypBCfE48bdEHiR67LLr9xLjks8MywkU3PE4eJxVIXy13MyoZKPEUcUVSN8oWcywrnLc5qtc7a9+QvDBW0lQzXaY0ggSUkkYIIGXVUUIWFKO0aKSbSdB738A87/hS5ZHJVwMixgBpUSI4f/A9+99YsTk64SaE40PNi2x+jQHAXaDVs+/vYtlsngP8ZuNI6/loTmPkkvdHRIkfAwDZwcd3R5D3gcgcYetIlQ3IkPy2hWATez+ib8sDgLdC35vatfY7TByBLvVq+AQ4OgbESZa97vLu3u2//1rT79wP8+HLeZmIlLQAADXZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6OWE0MDQ0ZWEtMzZiZS00NmNjLTlhMGEtYmJiNGU4MjEwNzlhIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI4YTc3OGU3LTFiZjUtNDk4Ni05ZDU4LWZmYjZmYTM1OTc3YSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA0NjMzMDU4LWFkNDItNDYwYi04ZGUzLTU3ZTVkZGE2ZWMwNyIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzQzNjUzMTM0NzY5OTI5IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzYiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1OjA0OjAyVDIxOjA1OjMzLTA3OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNTowNDowMlQyMTowNTozMy0wNzowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBmZmE3NThhLTUyMWEtNDYyNy1hYWE3LWU3NDY4ZTkxMzFkMyIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNS0wNC0wMlQyMTowNTozNCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6v4yaiAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6QQDBAUitbT0uQAAFrFJREFUaN7Vm2mMJOd5339vHV3Vd8997ezsveQevESaXF6SrFuKBCGxrQ8KlHxQggD5FIWKA+SAkAQIEB+A/TUfDBmSEEiBIBqwTdmSTXElKpJIieZenJ0lObs7O3ff3dVXVT35UNV398zIBgKkgJ6p7q6q933e93n+z/85WnHA8eL3HV3hfxz4NIqngNPAtEKA8K8Q/Fcg0r4zOFGozjul2ifB//alqvMhPRd0D1HBGJ0j/FokPFU9Iwa3byHcAX6C4i9+9PHE1YNkVKM+fOGvKpom8mXgPwDH+2fUP9XBuUmPaCCoAREHH9VeouHnDN6jOPQYeYlaBfnPP/pE8ttHuuWDr5ROoNR3EJ6UXmkHZzdKGiRUhaPNd+zRq1rtQY/4vD5NVN37FfKXovjnr30itTt2AT74Suks8KqILI7a9UPnLcOrKz0nSo2QT0mg533aIgNa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
// @updateURL    https://github.com/aviationant/userscript_ip_location/raw/main/IP Location.user.js
// @downloadURL  https://github.com/aviationant/userscript_ip_location/raw/main/IP Location.user.js
// @match        *://*/*
// @connect      freeipapi.com
// @connect      ipapi.co
// @connect      ip-api.com
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

'use strict';

const AUTO_UPDATE = true;
const UPDATE_TIME = 10000;

const intervalMap = new Map();

GM_addStyle (`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    :root {
        --primary-color: #1A1A1A;
        --hover-color: #3A3A3A;
        --border-color: #858585;
        --text-color: white;
        --font-family: "Roboto", sans-serif;
    }

    .floating-element {
        position: fixed;
        top: 40px;
        left: calc(100% - 300px);
        box-sizing: border-box;
        display: flex;
        z-index: 1000;
        background-color: var(--primary-color);
        border: 0.5px solid var(--border-color);
        border-radius: 4px;
        align-items: center;
    }

    .button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 4px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 4px;
        line-height: 1;
        width: 30px;
        height: 30px;
        color: var(--text-color);
    }

    .button:hover {
        background-color: var(--hover-color);
    }

    .button-stack {
        display: flex;
        flex-direction: column;
        margin-left: 2px;
    }

    .dialog-box {
        cursor: move;
        padding: 6px;
        text-align: left;
        font-family: var(--font-family);
        font-size: 10.5px;
        color: var(--text-color);
    }

`);

async function checkApis() {

    const apis = [
        { url: "https://freeipapi.com/api/json",
         name: "freeipapi.com",
         parseFunc: parseFreeipapi },
        { url: "https://ipapi.co/json/",
         name: "ipapi.co",
         parseFunc: parseIpapi },
        { url: "http://ip-api.com/json/",
         name: "ip-api.com",
         parseFunc: parseIP_API }
    ];

    for (let api of apis) {
        try {
            let response = await getRequest(api.url);
            let [ip, city, state, country] = api.parseFunc(response);
            return [ip, city, state, country];
        } catch {console.log(`Can't reach ${api.name}`)}
    };
}

function parseFreeipapi(response) {
    const data = JSON.parse(response.responseText);
    let ip = data.ipAddress;
    let city = data.cityName;
    let state = data.regionName;
    let country = data.countryCode;

    return [ip, city, state, country];
}

function parseIpapi(response) {
    const data = JSON.parse(response.responseText);
    let ip = data.ip;
    let city = data.city;
    let state = data.region_code;
    let country = data.country_code;

    return [ip, city, state, country];
}

function parseIP_API(response) {
    const data = JSON.parse(response.responseText);
    let ip = data.query;
    let city = data.city;
    let state = data.regionName;
    let country = data.countryCode;

    return [ip, city, state, country];
}

function getRequest(url, requestConfig) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: requestConfig?.method || 'GET',
            url: url,
            headers: requestConfig?.headers || {},
            data: requestConfig?.body,
            responseType: 'json',
            onload: response => {
                if (response.status >= 200 && response.status <= 300) {
                    resolve(response);
                } else {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                }
                onerror: error => reject(error);
            }
        });
    });
}

function makeDialog(ip, city, state, country, time) {
    const floatingElement = document.createElement('div');
    floatingElement.id = 'floating-element';
    floatingElement.className = 'floating-element';

    const buttonStack = document.createElement('div');
    buttonStack.id = 'button-stack';
    buttonStack.className = 'button-stack';

    const closeButton = document.createElement('button');
    closeButton.id = 'ip-close-button';
    closeButton.className = 'button';
    closeButton.innerHTML = '×';

    const refreshButton = document.createElement('button');
    refreshButton.id = 'ip-refresh-button';
    refreshButton.className = 'button';
    refreshButton.innerHTML = '↻';

    const dialogElement = document.createElement('div');
    dialogElement.id = 'ip-dialog';
    dialogElement.innerHTML = `
    Public IP: ${ip}<br>
    Location: ${city}, ${state} ${country}<br>
    <span style="font-size: 9px">Last Checked: ${time}</span>
    `;
    dialogElement.className = 'dialog-box';

    document.body.appendChild(floatingElement);
    floatingElement.appendChild(dialogElement);
    floatingElement.appendChild(buttonStack);
    buttonStack.appendChild(closeButton);
    buttonStack.appendChild(refreshButton);
    makeDraggable(floatingElement, floatingElement);

    return [floatingElement, dialogElement, closeButton, refreshButton];
}

function makeDraggable(element, handle) {
    handle.addEventListener('mousedown', function onMouseDown(event) {
        // Prevent any default browser behavior (e.g., text selection)
        event.preventDefault();

        // Calculate the initial left position since the original style uses right
        let currentLeft = element.getBoundingClientRect().left;
        element.style.left = currentLeft + 'px';
        element.style.right = ''; // Remove right to avoid conflicts

        // Calculate the offset between the mouse position and the element's position
        let shiftX = event.clientX - currentLeft;
        let shiftY = event.clientY - element.getBoundingClientRect().top;

        // Handle mouse movement
        function onMouseMove(event) {
            element.style.left = (event.clientX - shiftX) + 'px';
            element.style.top = (event.clientY - shiftY) + 'px';
            Array.from(element.children).forEach(child => {
                child.style.left = (event.clientX - shiftX) + 'px';
                child.style.top = (event.clientY - shiftY) + 'px';
            });
        }

        // Add event listeners to the document for dragging and stopping
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', function onMouseUp() {
            // Clean up event listeners when dragging stops
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        });
    });
}

function generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Simple random number between 0 and 999999
}

function getTime() {
    const timeRegex = /^(.+)\s\(.+$/
    let dateTime = new Date();
    let time = dateTime.toTimeString();
    let timeString = timeRegex.exec(time)[1]
    return timeString;
}

function loadingDialog(element, time) {
    element.innerHTML = `
        Public IP: Loading...<br>
        Location: Loading...<br>
        <span style="font-size: 9px">Last Checked: ${time}</span>
        `;
}

async function updateDialog(element) {
    let [ip, city, state, country] = await checkApis();
    let time = getTime();
    element.innerHTML = `
        Public IP: ${ip}<br>
        Location: ${city}, ${state} ${country}<br>
        <span style="font-size: 9px">Last Checked: ${time}</span>
        `;
}

async function main() {
    let isOpen = true;
    let [ip, city, region, country] = await checkApis();
    let time = getTime();
    const [floatingElement, dialogElement, closeButton, refreshButton] = makeDialog(ip, city, region, country, time);

    let intervalIdKey = generateRandomId();

    if (AUTO_UPDATE) {
        const intervalId = setInterval(() => {
            if (isOpen && document.body.contains(floatingElement)) {
                loadingDialog(dialogElement, time);
                updateDialog(dialogElement);
            } else if (!document.body.contains(floatingElement)) {
                clearInterval(intervalMap.get(intervalIdKey))
                intervalMap.delete(intervalIdKey);
            }

        }, UPDATE_TIME);

        intervalMap.set(intervalIdKey, intervalId);
    }

    closeButton.addEventListener('click', function() {
        isOpen = false;
        clearInterval(intervalMap.get(intervalIdKey));
        intervalMap.delete(intervalIdKey);
        floatingElement.remove();
    });

    refreshButton.addEventListener('click', function() {
        loadingDialog(dialogElement, time);
        updateDialog(dialogElement);
    });
};

main();
